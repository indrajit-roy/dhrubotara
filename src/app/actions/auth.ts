'use server';

// Hardcoded list of authorized admin phone numbers
// This code runs only on the server, so these numbers are not exposed to the client bundle
const AUTHORIZED_NUMBERS = ["+918334030949", "+917676948813"];

export async function verifyAdmin(phoneNumber: string | null | undefined): Promise<boolean> {
  if (!phoneNumber) return false;
  return AUTHORIZED_NUMBERS.includes(phoneNumber);
}
