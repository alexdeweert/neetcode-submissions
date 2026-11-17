class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        '''
        Could possibly sort each string and compare it to a hash with groups

        Could also maintain a hash which, based on alphabet position, increments the List.
        Need an alphabet char position lookup


        '''
        foo = "a"
        mymap = {}

        for s in strs:
            # generate key
            key = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            for ch in s:
                pos = self.getPosition(ch)
                key[pos] += 1
            key = tuple(key)
            if key in mymap:
                mymap[key].append(s)
            else:
                mymap[key] = [s]

        
        return list(mymap.values())
    
    def getPosition(self, char: str) -> int:
        return ord(char.lower()) - 97