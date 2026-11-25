const nicknameByteLimit = 10;

function nicknameByteLength(value) {
  return Array.from(value).reduce((total, character) => {
    const code = character.codePointAt(0);
    const halfWidth = code <= 0x7f || (code >= 0xff61 && code <= 0xffdc) || (code >= 0xffe8 && code <= 0xffee);
    return total + (halfWidth ? 1 : 2);
  }, 0);
}
