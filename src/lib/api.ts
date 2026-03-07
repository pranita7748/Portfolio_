const getBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/$/, "");
  }
  return "";
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse =
  | { success: true; id: string }
  | { success: false; error: string };

export async function postContact(payload: ContactPayload): Promise<ContactResponse> {
  const base = getBaseUrl();
  try {
    const res = await fetch(`${base}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as ContactResponse;
    if (!res.ok && !("success" in data)) {
      return { success: false, error: "Something went wrong. Please try again." };
    }
    return data;
  } catch {
    return { success: false, error: "Network error. Please check your connection and try again." };
  }
}
