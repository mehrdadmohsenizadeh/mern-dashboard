import { useState } from 'react';
import { HiOutlineSun } from "react-icons/hi2";
import { BiCopy } from "react-icons/bi";
import { IoIosMoon } from "react-icons/io";

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// ==================================================
const codeSnippetContainerLanguage = 'javascript';
// ---------------------------------------------------
//                CodeSnippetContainer
// ---------------------------------------------------
const CodeSnippetContainerStyle = {
  width: '100%'
, maxWidth: '800px'
, minWidth: '200px'
, paddingTop: '20px'
, paddingRight: '100px'
, textAlign: 'left'
, borderRadius: '7px'
, overflowX: 'auto'
};

const CodeSnippetContainer = ({ code, theme }) => {
    return (
      <SyntaxHighlighter
        language={codeSnippetContainerLanguage}
        style={theme === 'light' ? ghcolors : vscDarkPlus}
        showLineNumbers={code.split('\n').length > 1}
        lineNumberStyle={{
            width: '10px'
          , fontSize: '12px'
          , textAlign: 'right'
          , fontWeight: 'bold'
          , paddingRight: '10px'
          , fontFamily: 'monospace'
          , color: 'rgba(0, 0, 0, 0.0)'
        }}
        lineStyle={true}
        customStyle={CodeSnippetContainerStyle}
      >
        {code}
      </SyntaxHighlighter>
    );
};
// ---------------------------------------------------
//               ButtonCopyToClipboard
// ---------------------------------------------------
const copiedTextStyle = {
  padding: '5px'
, color: 'white'
, fontSize: '12px'
, fontWeight: 'bold'
, textAlign: 'center'
, borderRadius: '5px'
, visibility: 'visible'
, fontFamily: 'Arial, sans-serif'
, backgroundColor: 'rgba(169, 6, 54, 0.8)'
};

// 
const buttonContainerStyle = {
  display: 'flex', // Make the buttons sit next to each other
  alignItems: 'center' // Center items vertically
};

const ButtonCopyToClipboard = ({ text, theme }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <button>
          {
            copied
            ?
            <span style={copiedTextStyle}>Copied!</span>
            :
            <BiCopy style={{ fontSize: '1.3em', color: theme === 'dark' ? 'white' : 'inherit' }} />
          }
        </button>
      </CopyToClipboard>
    </div>
  );
};
// ---------------------------------------------------
//                ButtonToggleTheme
// ---------------------------------------------------
const FONT_SIZE = '1.2em';
const MARGIN_LEFT = '3px';
const MARGIN_BOTTOM = '3px';
const ButtonToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} style={{ marginLeft: MARGIN_LEFT, fontSize: FONT_SIZE }}>
      {
        theme === 'light'
        ?
        (
          <IoIosMoon
            style={{ marginBottom: MARGIN_BOTTOM }}
          />
        ) :
        (
          <HiOutlineSun
            color="white"
            style={{ marginBottom: MARGIN_BOTTOM, fontSize: FONT_SIZE }}
          />
        )
      }
    </button>
  );
};
// ---------------------------------------------------
//                CodeSnippetComponent
// ---------------------------------------------------
const CodeSnippetComponent = ({ code }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <div style={{ position: 'relative' }}>
        <CodeSnippetContainer
          code={code}
          theme={theme}
          highlighterStyle={CodeSnippetContainerStyle}
        />
        {/* *************************************** */}
        <div style={{ ...buttonContainerStyle, position: 'absolute', top: '15px', right: '7px' }}>
          <ButtonCopyToClipboard
            text={code}
            theme={theme}
          />
            {/* *************************************** */}
          <ButtonToggleTheme
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      </div>
    );
};
// ---------------------------------------------------
export { CodeSnippetComponent };

// Usage:
{/* <CodeSnippetComponent code={`function greet() {console.log('Hello, worldddddddd!')}\nconsole.log`} /> */}