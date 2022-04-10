import Editor from '@monaco-editor/react';

type Props = {
  language: string;
  value: string;
  onChange: Function;
};

const Monaco = ({ language, value, onChange }: Props) => {
  return (
    <Editor
      theme='vs-dark'
      height='50vh'
      language={language}
      value={value}
      onChange={(value: any) => {
        onChange(value);
      }}
    />
  );
};

export default Monaco;
