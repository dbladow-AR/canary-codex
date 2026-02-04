import { NextResponse } from "next/server";

type QualifyPayload = {
  name?: string;
  email?: string;
  companyUrl?: string;
  platform?: string;
  stage?: string;
  question?: string;
  website?: string;
};

const REQUIRED_FIELDS: (keyof QualifyPayload)[] = [
  "name",
  "email",
  "companyUrl",
  "platform",
  "stage",
  "question"
];

export async function POST(request: Request) {
  let payload: QualifyPayload = {};

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const tasks: Promise<Response>[] = [];

  const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetsWebhook) {
    tasks.push(
      fetch(sheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
    );
  }

  const notionKey = process.env.NOTION_API_KEY;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;
  if (notionKey && notionDatabaseId) {
    tasks.push(
      fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${notionKey}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          parent: { database_id: notionDatabaseId },
          properties: {
            Name: {
              title: [{ text: { content: payload.name ?? "" } }]
            },
            Email: {
              email: payload.email
            },
            Company: {
              url: payload.companyUrl
            },
            Platform: {
              select: { name: payload.platform }
            },
            Stage: {
              select: { name: payload.stage }
            },
            Question: {
              rich_text: [{ text: { content: payload.question ?? "" } }]
            }
          }
        })
      })
    );
  }

  if (tasks.length > 0) {
    await Promise.allSettled(tasks);
  }

  return NextResponse.json({ ok: true });
}
