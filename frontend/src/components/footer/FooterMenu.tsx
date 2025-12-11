"use client";

import Link from "next/link";

export default function FooterMenu({
  github,
  linkedin,
}: {
  github: string;
  linkedin: string;
}) {
  return (
    <footer className="border-t bg-gray-50 mt-8 py-6">
      <div className="container mx-auto text-center space-y-3">

        <p className="text-sm text-gray-600">© 2025 Chida Gold. All rights reserved.</p>

        <div className="flex justify-center gap-6 text-blue-600 font-medium">

          <Link href={github} target="_blank" className="hover:underline">
            GitHub
          </Link>

          <Link href={linkedin} target="_blank" className="hover:underline">
            LinkedIn
          </Link>

        </div>
      </div>
    </footer>
  );
}