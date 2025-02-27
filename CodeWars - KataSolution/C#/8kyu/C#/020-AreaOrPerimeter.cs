using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class AreaOrPerimeter
    {
        public static int AreaOrPerimeters(int l, int w)
        {
            return l == w ? l * w : (2 * (l + w));
        }
    }
}
