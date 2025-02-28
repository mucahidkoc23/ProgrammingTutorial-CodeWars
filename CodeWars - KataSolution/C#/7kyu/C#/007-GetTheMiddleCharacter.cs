using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class GetTheMiddleCharacter
    {
        public static string GetMiddle(string s)
        {
            char[] middle = s.ToArray();
            return middle.Length % 2 == 0 ? $"{middle[middle.Length / 2 - 1]}{middle[middle.Length / 2]}": $"{middle[(middle.Length - 1)/2]}";

        }
    }
}
