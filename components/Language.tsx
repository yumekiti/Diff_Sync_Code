import { useMonaco } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { Text, Spacer } from '@nextui-org/react';
import style from '../styles/Language.module.css';

type Props = {
  lang: string;
  onChange: any;
};

const Language = ({ lang, onChange }: Props) => {
  const [langs, setLangs] = useState<string[]>([]);
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.languages.getLanguages().map((language: any) => {
        setLangs((langs) => [...langs, language.id]);
      });
    }
  }, [monaco]);

  return (
    <div className={style.body}>
      <Text>Language</Text>
      <Spacer x={1} />
      <select
        defaultValue={lang}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value={lang}>{lang}</option>
        {langs.map((lang, index) => {
          return (
            <option value={lang} key={index}>
              {lang}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Language;
