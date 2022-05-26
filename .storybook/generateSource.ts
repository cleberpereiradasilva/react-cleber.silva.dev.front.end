/* eslint-disable indent */
import { cloneElement, isValidElement } from "react"
import reactElementToJSXString from "react-element-to-jsx-string"
import dedent from "ts-dedent"


export const fixArg = (key: string, value: any): string => {
    let fixedValue = "";
    const valueTypeof = typeof value;
    if (isValidElement(value)) {
        return `{${reactElementToJSXString(cloneElement(value))}}`;
    }
    switch (valueTypeof) {
        case "function":
            fixedValue = `{${key}}`;
            break;

        case "string":
            fixedValue = `"${value}"`;
            break;

        case "boolean":
        case "number":
        case "boolean":
            fixedValue = `{${value}}`;
            break;

        case "object":
            fixedValue = `{${JSON.stringify(value)}}`;
            break;

        default:
            fixedValue = String(value);
            break;
    }

    return fixedValue;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
    componentName: string,   
    args,
    options?: { spacing?: number; prePendSpacing?: number; onlyProps?: boolean },
) => {
    const excludedArgs = ["children"]; // list of excluded keys in component props rendering

    const { spacing = 1, prePendSpacing = 0, onlyProps = false } = options || {};
    const props = [];
    Object.entries(args).forEach(([key, value]) => {
        if (!excludedArgs.includes(key)) {
            const fixedValue: any = fixArg(key, value);
            props.push(`${key}=${fixedValue}`);
        }
    });

    const textSpacing = Array(spacing).fill("\t").join("");
    const textPrePendSpacing = Array(prePendSpacing).fill("\t").join("");
    const propsText = props.join(`\n${textSpacing}`);
    const hasChildren = Boolean(args.children); // check if exists

    if (onlyProps) return dedent`\t${propsText}`;

    if (hasChildren) {
        return dedent`${textPrePendSpacing}<${componentName}\n${textSpacing}${propsText}\n>\n\t${args.children}\n</ ${textPrePendSpacing}${componentName}>`;
    }

    const source = dedent`${
        props.length
            ? `${textPrePendSpacing}<${componentName}\n ${textSpacing}${propsText}\n${textPrePendSpacing}/>`
            : `<${componentName} />`
    }`;

    return source;
};
