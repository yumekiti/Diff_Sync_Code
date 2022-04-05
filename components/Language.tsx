import { useMonaco } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { Text, Spacer } from '@nextui-org/react';
import style from '../styles/Language.module.css';

type Props = {
  lang: string;
  onChangeLang: any;
};

const Language = ({ lang, onChangeLang }: Props) => {
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
    <div className={style.language}>
      <Text>Language</Text>
      <Spacer x={1} />
      <select
        defaultValue={lang}
        onChange={(e) => {
          onChangeLang(e.target.value);
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
