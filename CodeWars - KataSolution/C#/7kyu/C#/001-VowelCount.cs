using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace C_
{
    class VowelCount
    {
        public static int GetVowelCount(string str)
        {
            List<string> vowel = new List<string>();
            Regex regex = new Regex("[aeiouAEIOU]");
            MatchCollection matches = regex.Matches(str);

            foreach (Match match in matches)
            {
                vowel.Add(match.Value);
            }

            return vowel.Count;
        }

        // OR Solution 2
        //public static int GetVowelCount(string str)
        //{
        //    return str.Count(i => "aeiou".Contains(i));
        //}
    }
}
