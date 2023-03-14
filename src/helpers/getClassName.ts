import { useMemo } from "react";

type ClassRuleType = [
  className: string | undefined,
  rule?: boolean | null | undefined
];

export const getClassName = (classRules: ClassRuleType[]) => {
  return classRules
    .map(([className, rule]) => {
      if (!className) {
        return null;
      }
      return rule === null || rule === undefined
        ? className
        : rule
        ? className
        : null;
    })
    .filter((item) => !!item)
    .join(" ");
};

export const useMemoClassName = (classRules: ClassRuleType[]) => {
  return useMemo(() => getClassName(classRules), [classRules]);
};
