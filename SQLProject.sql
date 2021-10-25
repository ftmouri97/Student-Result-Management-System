use master;

create database sql_project;

use sql_project;

create table StudentInformation(
StudentId int not null,
FirstName nvarchar(50),
LastName nvarchar(50),
FatherName nvarchar(50),
MotherName nvarchar(50),
StudentAddress nvarchar(300),
DateOfBirth datetime,
Gender nvarchar(10),
Religion nvarchar(10),
Mobile nvarchar(20)
);

create table CourseInformation(
CourseId int not null,
CourseName nvarchar(50)
);

create table Subjects(
SubjectId int,
SubjectName nvarchar(50),
CourseId int
);

create table Batch(
BatchId int,
BatchCode nvarchar(50),
CourseId int,
StartDate datetime
);

create table BatchBaseStudent(

BatchBaseStudentId nvarchar(50),
BatchId int,
StudentId int,
);

create table StudentGrade(
GradeId int,
NumberFrom float,
NumberTo float,
Grade nvarchar(2)                                                                                                                                                                                                                                                                                                                    
);

create table Result(
ResultId int,
BatchBaseStudentId nvarchar(50),
SubjectId int,
Number float
);

create table Users(
UserId int,
UserName nvarchar(50),
Password nvarchar(50)
);

select *
from StudentInformation;

select *
from CourseInformation;

select *
from Subjects;

select *
from Batch;

select *
from BatchBaseStudent;

select *
from StudentGrade;

select *
from Result;

select *
from Users;

alter table StudentInformation
add primary key(StudentId);

alter table CourseInformation
add primary key(CourseId);

alter table Subjects
add primary key(SubjectId);

alter table Subjects
alter column SubjectId int not null;

alter table Batch
alter column BatchId int not null;


alter table Batch
add primary key(BatchId);

alter table BatchBaseStudent
alter column BatchBaseStudentId int not null;

alter table BatchBaseStudent
add primary key(BatchBaseStudentId);

alter table Result
alter column ResultId int not null;

alter table Result
add primary key(ResultId);

alter table StudentGrade
alter column GradeId int not null;


alter table StudentGrade
add primary key(GradeId);

alter table Users
alter column UserId int not null;


alter table Users
add primary key(UserId);

alter table Subjects
add constraint Course_Id foreign key (CourseId) references CourseInformation(CourseId);


alter table Batch
add constraint Crs_Id foreign key (CourseId) references CourseInformation(CourseId);

alter table BatchBaseStudent
add constraint Std_Id foreign key (StudentId) references StudentInformation(StudentId);

alter table BatchBaseStudent
add constraint Batch_Id foreign key (BatchId) references Batch(BatchId);

alter table Result
add constraint Btch_Id foreign key (BatchBaseStudentId) references BatchBaseStudent(BatchBaseStudentId);

alter table BatchBaseStudent
alter column BatchBaseStudentId int;

alter table BatchBaseStudent
drop constraint PK__BatchBas__7A13CE0EF1A9BA5F;

alter table Result
alter column BatchBaseStudentId int;

alter table Result
add constraint Sbjct_Id foreign key (SubjectId) references Subjects(SubjectId);

INSERT into StudentInformation values(1,'Farzana Tabassum','Mouri','Morshed Uddin Ahmed Chowdhury','Salma Sharmin','2noGate','17-Feb-1997','Female','Islam','01521224425')
INSERT into StudentInformation values(2,'Md.Farhan Anjum','Chowdhury','Morshed Uddin Ahmed Chowdhury','Salma Sharmin','2noGate','27-Jul-2000','Male','Islam','01971750566')
INSERT into StudentInformation values(3,'Tamanna Zubairi','Sana','Sazid Zubairi','Reshma Zubairi','Nasirabad Housing Society','29-Aug-1996','Female','Islam','01917366197')
INSERT into StudentInformation values(4,'Abida Saima','Mahmuda','Mohammad Mohsin','Shamima Nargis','O.R.Nizam Road','31-Aug-1996','Female','Islam','01812345678')
INSERT into StudentInformation values(5,'Mursalul','Zumar','Md.Showkat Zumar','Asma Begum','Persival Hill','27-Jul-1995','Male','Islam','01912345678')
INSERT into StudentInformation values(6,'Abdul Aziz Khan','Saif','Abdul Hamid Khan','Shirin Akhter','AmanBazar','21-Feb-1995','Male','Islam','01839003456') 
INSERT into StudentInformation values(7,'Tonmoy','Biswas','Dhrubo Biswas','Oeshmita Biswas','Rahmatgonj','02-May-1990','Male','Hindu','01612345678')
INSERT into StudentInformation values(8,'Abrar Labib','Obhro','Md.Kamruzzaman','Afia Khanam','Chawkbazar','15-Dec-1993','Male','Islam','01512345678')
INSERT into StudentInformation values(9,'Lindsey','Mondol','Pratik Mondol','Anita Mondol','Zamal Khan','13-Mar-1994','Female','Christian','01712345678')
INSERT into StudentInformation values(10,'Arpita','Debi','Srikanto Deb','Shushmita Debi','NandanKanan','13-Oct-1992','Female','Hindu','01212345678')

update StudentInformation
set mobile='01521358378'
where StudentId=1;

update StudentInformation
set mobile='01921358378'
where StudentId=2;

insert into CourseInformation values (1,'ADSE')
insert into CourseInformation values (2,'Graphics Design')
insert into CourseInformation values (3,'3D Animation')
insert into CourseInformation values (4,'Office Application')
insert into CourseInformation values (5,'Hardware and Troubleshooting')
insert into CourseInformation values (6,'Affiliate Marketing')
insert into CourseInformation values (7,'Networking')
insert into CourseInformation values (8,'Autocad')
insert into CourseInformation values (9,'Outsourcing')
insert into CourseInformation values (10,'Mobile Application Development')

insert into Batch values(1,'B-01',1,'15-Nov-17 14:00')
insert into Batch values(2,'B-02',2,'1-Dec-17 12:00')
insert into Batch values(3,'B-03',3,'1-Nov-17 10:00')
insert into Batch values(4,'B-04',4,'1-Jan-18 10:00')
insert into Batch values(5,'B-05',5,'15-Dec-17 19:00')
insert into Batch values(6,'B-06',6,'15-Jan-18 17:00')
insert into Batch values(7,'B-07',7,'1-Nov-17 10:00')
insert into Batch values(8,'B-08',8,'1-Dec-17 15:00')
insert into Batch values(9,'B-09',9,'1-Jan-18 9:00')
insert into Batch values(10,'B-10',10,'2-Dec-18 15:00')
insert into Batch values(11,'B-11',1,'15-Nov-17 17:00')
insert into Batch values(12,'B-12',2,'15-Dec-17 10:00')
insert into Batch values(13,'B-13',4,'16-Jan-18 14:00')
insert into Batch values(14,'B-14',7,'15-Nov-17 15:00')
insert into Batch values(15,'B-15',9,'15-Jan-18 17:00')

insert into BatchBaseStudent values(1,1,1)
insert into BatchBaseStudent values(2,2,2)
insert into BatchBaseStudent values(3,13,3)
insert into BatchBaseStudent values(4,11,4)
insert into BatchBaseStudent values(5,7,5)
insert into BatchBaseStudent values(6,1,6)
insert into BatchBaseStudent values(7,3,7)
insert into BatchBaseStudent values(8,10,8)
insert into BatchBaseStudent values(9,2,9)
insert into BatchBaseStudent values(10,15,10)
insert into BatchBaseStudent values(11,6,2)
insert into BatchBaseStudent values(12,5,5)
insert into BatchBaseStudent values(13,2,8)

insert into Users values (1,'Ali Ahsan','asdfg')
insert into Users values (2,'Arafat Mahmud','qwert')
insert into Users values (3,'Afsana Dilwar','zxcvb')
insert into Users values (4,'Sujan Barua','poiuy')
insert into Users values (5,'Sumana Hoque','lkjh')

insert into Subjects values(1,'Database',1)
insert into Subjects values(2,'Photoshop & Illustrator',2)
insert into Subjects values(3,'Animation, Rendering and Output Techniques',3)
insert into Subjects values(4,'MSWord',4)
insert into Subjects values(5,'Bus Architecture & Interfaces',5)
insert into Subjects values(6,'Practical SEO',6)
insert into Subjects values(7,'Internet Protocol',7)
insert into Subjects values(8,'Annotation Scaling in Drawing',8)
insert into Subjects values(9,'Developing and Managing an Organization',9)
insert into Subjects values(10,'Advanced UI Interaction',10)

insert into StudentGrade values(1,0.00,32.00,'F')
insert into StudentGrade values(2,33.00,39.00,'D')
insert into StudentGrade values(3,40.00,49.00,'C')
insert into StudentGrade values(4,50.00,59.00,'B')
insert into StudentGrade values(5,60.00,69.00,'A-')
insert into StudentGrade values(6,70.00,79.00,'A')
insert into StudentGrade values(7,80.00,100.00,'A+')

insert into Result values (1,1,1,87)
insert into Result values (2,2,2,65)
insert into Result values (3,3,3,53)
insert into Result values (4,4,4,92)
insert into Result values (5,5,5,81)
insert into Result values (6,6,1,85)
insert into Result values (7,7,7,87)
insert into Result values (8,8,3,77)
insert into Result values (9,9,2,74)
insert into Result values (10,10,9,43)
insert into Result values (11,11,6,35)
insert into Result values (12,12,5,30)
insert into Result values (13,13,2,67)

alter view Students_view as
select si.StudentId,si.FirstName,si.LastName,ci.CourseId,ci.CourseName
from StudentInformation as si
join BatchBaseStudent as bbs
on si.StudentId=bbs.StudentId
join Batch as bt
on bt.BatchId=bbs.BatchId
join CourseInformation as ci
on ci.CourseId=bt.CourseId

select * from Students_view

alter view Result_view as
select si.StudentId,si.FirstName,si.LastName,ci.CourseName,re.Number
from StudentInformation as si
join BatchBaseStudent as bbs
on si.StudentId=bbs.StudentId
join Batch as bt
on bt.BatchId=bbs.BatchId
join CourseInformation as ci
on ci.CourseId=bt.BatchId
join Result as re
on re.BatchBaseStudentId=bbs.BatchBaseStudentId

select * from Result_view
