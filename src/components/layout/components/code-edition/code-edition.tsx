import { postRequest } from '@/lib/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import { FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/router';

export const CodeEdition = (props: {
  defaultCode?: string | null;
  defaultOutput?: string | null;
}) => {
  const [extenxionDartCode, setExtenxionCode] = useState<string>();
  const defaultCode = `
  void main(){
    print('hello world'.title);
  }`;
  const defaultOutput = 'Hello World';
  const editorRef = useRef(props.defaultCode ?? defaultCode);
  const [outPut, setOutPut] = useState<string>(
    props.defaultOutput ?? defaultOutput
  );
  const [isRunning, setIsRunning] = useState(false);
  const router = useRouter();
  const enabledCodeEdition =
    router.pathname === '/string' ||
    router.pathname === '/lists' ||
    router.pathname === '/custom-func';

  function handleEditorChange(value: any, ev: any) {
    editorRef.current = value;
  }

  const fetchExtenxion = useCallback(async () => {
    const dartExtenxion = await fetch('api/get-file');
    const dartData = await dartExtenxion.text();
    setExtenxionCode(dartData);
  }, []);

  useEffect(() => {
    fetchExtenxion();
  }, [fetchExtenxion]);

  const outputDiv = useMemo(
    () => (
      <div className="py-3">
        <h6 className="font-extrabold text-xl pb-3">Output</h6>
        <div className="p-3 dark:bg-stone-900 overflow-auto h-[200px] whitespace-pre-line text-white bg-stone-900">
          {outPut}
        </div>
      </div>
    ),
    [outPut]
  );

  const runnerButton = useMemo(() => {
    const runDartCode = async () => {
      if (isRunning) {
        return;
      }
      const code = editorRef.current;
      if (!code) {
        return;
      }
      setIsRunning(true);
      const body = {
        stdin: '',
        files: [
          {
            name: 'main.dart',
            content: `
          ${code}\n${extenxionDartCode}`,
          },
        ],
      };

      const result = await postRequest({
        route: '/api/run-dart',
        data: body,
        headers: {
          Authorization: 'bc71acaa-f43a-4b3e-af69-ddc3dfe0f4c8',
          'Content-Type': 'application/json',
        },
      });

      setOutPut(result.response as string);
      setIsRunning(false);
    };
    return (
      <button
        onClick={runDartCode}
        className="rounded mt-4 bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 data-[disabled]:bg-gray-500"
      >
        <FaPlay className={isRunning ? 'animate-spin' : ''} />
      </button>
    );
  }, [extenxionDartCode, isRunning]);

  return (
    enabledCodeEdition && (
      <div>
        <div
          className="
                    relative
                    w-full
                "
        >
          <div className="py-3">
            <h6 className="font-extrabold text-xl pb-3">Check code</h6>
            <div key={editorRef.current}>
              <CodeMirror
                value={editorRef.current}
                theme={tokyoNight}
                extensions={[StreamLanguage.define(javascript)]}
                onChange={handleEditorChange}
                indentWithTab={false}
                height="250px"
                basicSetup={{ autocompletion: false }}
              />
            </div>
            {runnerButton}
            {outputDiv}
          </div>
        </div>
      </div>
    )
  );
};
