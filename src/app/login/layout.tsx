"use client";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Login</title>
      {children}
    </>
  );
}
