import Editor from "@monaco-editor/react";

type Props = {
  text: string;
  setText: any;
  lang: string;
};

const Monaco = ({text, setText, lang}: Props) => {
  return (
    <Editor
      theme="vs-dark"
      height="50vh"
      language={lang}
      defaultValue={text}
      onChange={(value: any) => setText(value)}
    />
  )
}

export default Monaco