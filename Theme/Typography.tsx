export type TagType = {
  fontFamily: string, // eg. ProximaNova
  fontSize?: number,
  lineHeight?: number,
}

export type TypographyType = {
  textPadding?: number,
  fontFamily: {
    regular: string,
    medium: string,
    semibold: string,
    bold: string,
  },
  tags: {
    h1: TagType,
    h2: TagType,
    h3: TagType,
    h4?: TagType,
    h5?: TagType,
    normal: TagType,
    medium: TagType,
    small: TagType,
    tiny?: TagType,
    b: TagType,
  },
}
