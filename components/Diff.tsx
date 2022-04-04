import { DiffEditor } from "@monaco-editor/react";

const Diff = () => {
  return (
    <DiffEditor
      theme="vs-dark"
      height="30vh"
      language="javascript"
      original="// the original code"
      modified="// the modified code"
    />
  )
}

export default Diff