//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PracClass
{
    using System;
    using System.Collections.Generic;
    
    public partial class StudentResult
    {
        public int ResultId { get; set; }
        public Nullable<int> BatchBaseStudentId { get; set; }
        public Nullable<int> SubjectId { get; set; }
        public Nullable<double> Number { get; set; }
    
        public virtual Subject Subject { get; set; }
        public virtual BatchBaseStudent BatchBaseStudent { get; set; }
        public virtual BatchBaseStudent BatchBaseStudent1 { get; set; }
    }
}
