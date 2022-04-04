import { DiffEditor } from "@monaco-editor/react";

type Props = {
  rcode: string;
  lcode: string;
  lang: string;
};

const Diff = ({rcode, lcode, lang}: Props) => {
  return (
    <DiffEditor
      theme="vs-dark"
      height="30vh"
      language={lang}
      original={rcode}
      modified={lcode}
    />
  )
}

export default Diff