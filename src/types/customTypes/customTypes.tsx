export interface card {
    name: string;
    number: string;
    valid: string;
    expiry?: string;
    imageUrl: string
  }

export interface virtualCardProps{
    card: card
}

export function getRandomNumberInRange(min: number, max: number) {
    if (min > max) {
        throw new Error('Minimum value must be less than or equal to the maximum value.');
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }