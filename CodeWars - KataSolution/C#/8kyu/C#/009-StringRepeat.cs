using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class StringRepeat
    {
        public static string RepeatStr(int n, string s)
        {
            return string.Concat(Enumerable.Repeat(s , n));
        }
    }
}
