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
    
    public partial class BatchBaseStudent
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public BatchBaseStudent()
        {
            this.StudentResults = new HashSet<StudentResult>();
            this.StudentResults1 = new HashSet<StudentResult>();
        }
    
        public int BatchBaseStudentId { get; set; }
        public Nullable<int> StudentId { get; set; }
        public Nullable<int> BatchId { get; set; }
    
        public virtual Batch Batch { get; set; }
        public virtual StudentInformation StudentInformation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<StudentResult> StudentResults { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<StudentResult> StudentResults1 { get; set; }
    }
}
