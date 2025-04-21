type ClassValue = string | null | undefined | { [key: string]: boolean } | false;

export function cn(...classes: ClassValue[]): string {
  return classes
    .filter(Boolean)
    .map(c => 
      typeof c === 'object' && c !== null
        ? Object.entries(c)
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key)
            .join(' ')
        : c
    )
    .join(' ');
} 