import Editor from "@monaco-editor/react";

const Monaco = () => {
  return (
    <Editor
      theme="vs-dark"
      height="50vh"
      language="javascript"
      defaultValue="// some comment"
    />
  )
}

export default Monaco