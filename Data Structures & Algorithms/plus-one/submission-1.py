class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        # Can use num * 10^i (might want reverse iteration) on list
        # sum the values, add 1, then convert back into List of int
        digits = digits[::-1]
        carry = 1
        i = 0

        while carry:
            # don't want to iterate past the end
            if i < len(digits):
                # if the current digit is 9 - and we know there's a carry since we're here
                if digits[i] == 9:
                    digits[i] = 0
                # its a smaller digit so we can just add the carry and reset
                else:
                    digits[i] = digits[i] + carry
                    carry = 0
            # we're at the end, and we know there's a carry
            else:
                digits.append(carry)
                carry = 0
            i += 1
        return digits[::-1]

            
            