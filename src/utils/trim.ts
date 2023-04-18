export function trim(value: string, chars?: string) {
  if (chars === undefined) {
    return value.trim();
  }

  return value.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'gm'), '');
}
