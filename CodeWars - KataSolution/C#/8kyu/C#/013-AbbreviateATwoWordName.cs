using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class AbbreviateATwoWordName
    {
        public static string AbbrevName(string name)
        {
            return $"{name.ToUpper().Split(" ")[0][0]}.{name.ToUpper().Split(" ")[1][0]}";
        }
    }
}
