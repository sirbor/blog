import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

export default function Post({ content, data }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{data.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const directories = ['posts', 'notes', 'projects', 'garden'];
  let paths = [];

  directories.forEach((dir) => {
    const files = fs.readdirSync(path.join('content', dir));
    files.forEach((filename) => {
      paths.push({
        params: {
          slug: [dir, filename.replace('.md', '')],
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fullPath = path.join('content', slug[0], slug[1] + '.md');
  const markdownWithMeta = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      data,
    },
  };
}