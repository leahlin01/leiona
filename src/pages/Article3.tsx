import rehypeRaw from "rehype-raw";
import markdownContent from "../md/article3.md?raw";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Buffer } from "buffer"; // 引入 Buffer

// 将 Buffer 设置为全局变量
if (typeof window !== "undefined") {
  window.Buffer = Buffer;
}

const Article1: React.FC = () => {
  const { content } = matter(markdownContent);
  return (
    <div
      style={{
        margin: "48px auto",
        maxWidth: "980px",
        textAlign: "left",
        lineHeight: "2rem",
      }}
    >
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />,
    </div>
  );
};

export default Article1;
