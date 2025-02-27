using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class ArrayPlusArray
    {
        public static int ArrayPlus(int[] arr1, int[] arr2)
        {
            int sum1 = arr1.Sum();
            int sum2 = arr2.Sum();
            return sum1 + sum2;
        }
    }
}
