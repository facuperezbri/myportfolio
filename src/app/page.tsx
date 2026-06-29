import { redirect } from 'next/navigation'

// Root page — middleware handles locale detection and redirect.
// This is a safety net if middleware is bypassed.
export default function RootPage() {
  redirect('/en')
}
