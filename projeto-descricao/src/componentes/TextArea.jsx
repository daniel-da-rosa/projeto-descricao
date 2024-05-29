import React, { useRef, useEffect } from 'react';
import ClipboardJS from 'clipboard';

export default function TextArea({ comandoSQL }) {
  const clipboard = useRef(null);
  

  useEffect(() => {
    clipboard.current = new ClipboardJS('.copy-button', {
      text: () => document.getElementById('comando').innerText
    });

    clipboard.current.on('success', () => {
      console.log('Copiado com sucesso!');
    });

    return () => {
      if (clipboard.current) {
        clipboard.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <pre className="mt-4 p-2 bg-gray-200 rounded-md overflow-auto">
        <code id="comando">{comandoSQL}</code>
      </pre>
      <button
        className="bg-teal-900 text-white font-bold py-2 px-4 rounded mt-4 copy-button"
      >
        Copiar SQL
      </button>
    </div>
  );
}
