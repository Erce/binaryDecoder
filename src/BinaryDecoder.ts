import readline from 'readline';
import { BINARY_TO_CHAR_MAP } from './BinaryInterface';

export class BinaryDecoder {
    binaryToCharMap = BINARY_TO_CHAR_MAP;

    private validateBinaryString(binaryString: string): boolean {
        if (!/^[01]+(\.[01]+)*$/.test(binaryString)) {
            console.log('Invalid binary string. Only 0 and 1 are allowed.');
            return false;
        } else if (binaryString.replace(/\./g, '').length % 5 !== 0) {
            console.log('Invalid binary string. Length must be a multiple of 5.');
            return false;
        }

        return true;
    }

    public decodeBinaryString(binaryString: string): string {
        if (!this.validateBinaryString(binaryString)) {
            return '';
        }
        const binaryBlocks = binaryString.split('.');
        let result = '';
        binaryBlocks.forEach((block) => {
            result += this.binaryToCharMap[block] ?? '';
        });

        return result;
    }

    public start(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const questionCallback = (binaryString: string): void => {
            const decodedString = this.decodeBinaryString(binaryString);
            console.log(decodedString);
            rl.question('Enter a binary string to decode: ', questionCallback);
        };

        rl.question('Enter a binary string to decode: ', questionCallback);
    }
}