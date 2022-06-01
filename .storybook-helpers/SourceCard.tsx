import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, generateSource, Styled } from "./"

const getName = (type: string) =>
  type.toString().split("(")[0].replace("function ", "")

export const SourceCard = (Story, args, path) => {
  const TheStory = Story()
  const name: string = getName(TheStory.type)

  const source = generateSource(name, args, { spacing: 2, prePendSpacing: 1 })
  return (
    <>
      <Styled.Panel>{TheStory}</Styled.Panel>
      <Styled.Source>
        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          showLineNumbers={true}
          wrapLines={true}
        >
          {`//this part is under construction....\n\n${path} \n\n${source}`}
        </SyntaxHighlighter>
        <Copy value={source} />
      </Styled.Source>
    </>
  )
}
