import React from "react";
import Link from "next/link";
function BlogPage() {
  return (
    <main>
      <h1>The blog</h1>
      <p>
        <Link href="/blog/post-1">Blog 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Blog 2</Link>
      </p>
    </main>
  );
}

export default BlogPage;
