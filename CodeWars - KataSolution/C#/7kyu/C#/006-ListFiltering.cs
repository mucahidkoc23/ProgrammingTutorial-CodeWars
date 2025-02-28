using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class ListFiltering
    {
        public static IEnumerable<int> GetIntegersFromList(List<object> listOfItems)
        {
            return listOfItems.Where(x => x is int).Select(x => Convert.ToInt32(x)).ToArray();
        }
        //OR Solution 2

        //public static IEnumerable<int> GetIntegersFromList(List<object> listOfItems)
        //{
        //    return listOfItems.OfType<int>();

        //}
    }
}
