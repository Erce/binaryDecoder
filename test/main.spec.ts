import { BinaryDecoder } from "../src/BinaryDecoder";

describe("DecodeBinaryString", () => {
  let binDec = new BinaryDecoder();

  it('should return correct string for valid input', () => {
    expect(binDec.decodeBinaryString('00001.10000.10000.01100.00101.10011')).toBe('apples');
    expect(binDec.decodeBinaryString('01111.10010.00001.01110.00111.00101.10011')).toBe('oranges');
    expect(binDec.decodeBinaryString('10000.00101.01110')).toBe('pen');
    expect(binDec.decodeBinaryString('00001.10000.10000.01100.00101.11011')).toBe('apple');
    expect(binDec.decodeBinaryString('01111.10010.00001.01110.00111.00101.11110')).toBe('orange');
  });

  it('should return empty string for invalid input', () => {
    expect(binDec.decodeBinaryString('')).toBe('');
    expect(binDec.decodeBinaryString('00000')).toBe('');
    expect(binDec.decodeBinaryString('00001.00010.00011.')).toBe('');
    expect(binDec.decodeBinaryString('00001.00010.00011.00100.00101.')).toBe('');
    expect(binDec.decodeBinaryString('00001.00010.00011.00100.00101.1')).toBe('');
    expect(binDec.decodeBinaryString('00001.00010.00011.00100.00101.00110.')).toBe('');
  });
});

