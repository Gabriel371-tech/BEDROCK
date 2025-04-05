/**
 * Assignments.tsx
 * 
 * This page manages the academic assignments functionality of the application.
 * It provides different views for teachers and students:
 * - Teachers can create, view and manage assignments
 * - Students can view, submit, and track their assignments
 */

import { useState } from "react"; // Import React useState hook for local state management
import { AppLayout } from "@/components/layout/AppLayout"; // Import consistent application layout
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import card UI components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import tabs for switching between views
import { Button } from "@/components/ui/button"; // Import button component
import { Input } from "@/components/ui/input"; // Import input component for forms
import { Label } from "@/components/ui/label"; // Import label component for form fields
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"; // Import dialog components for modals
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"; // Import table components for displaying data
import { 
  FileText, 
  Plus, 
  Upload, 
  CheckCircle, 
  Clock, 
  Calendar,
  AlertCircle
} from "lucide-react"; // Import icons
import { Badge } from "@/components/ui/badge"; // Import badge component for status indicators
import { Separator } from "@/components/ui/separator"; // Import separator for visual dividers

/**
 * Sample assignment data - In a real app, this would come from an API
 * Each assignment contains:
 * - id: unique identifier
 * - title: name of the assignment
 * - subject: related academic subject
 * - dueDate: deadline for submission
 * - status: current state (open/closed)
 * - type: kind of assignment (essay/quiz/report/project)
 * - description: detailed information
 * - submissions: count of student submissions
 * - totalStudents: number of students enrolled
 */
const sampleAssignments = [
  {
    id: 1,
    title: "Midterm Essay",
    subject: "English Literature",
    dueDate: "Apr 15, 2025",
    status: "open",
    type: "essay",
    description: "Write a 5-page essay analyzing the themes in the assigned novel.",
    submissions: 12,
    totalStudents: 28,
  },
  {
    id: 2,
    title: "Linear Algebra Quiz",
    subject: "Mathematics",
    dueDate: "Apr 10, 2025",
    status: "open",
    type: "quiz",
    description: "Complete the online quiz covering vectors and matrices.",
    submissions: 18,
    totalStudents: 25,
  },
  {
    id: 3,
    title: "Cell Biology Lab Report",
    subject: "Biology",
    dueDate: "Apr 20, 2025",
    status: "open",
    type: "report",
    description: "Submit your findings from the microscopy lab experiment.",
    submissions: 5,
    totalStudents: 30,
  },
  {
    id: 4,
    title: "Programming Project",
    subject: "Computer Science",
    dueDate: "Apr 5, 2025",
    status: "closed",
    type: "project",
    description: "Develop a simple web application using the techniques learned in class.",
    submissions: 22,
    totalStudents: 22,
    graded: 15,
  },
];

/**
 * Sample student submission data - In a real app, this would come from an API
 * Each submission contains:
 * - id: unique identifier
 * - assignmentId: reference to the parent assignment
 * - studentName: name of the student
 * - submittedDate: when the assignment was turned in
 * - status: current state (submitted/graded)
 * - grade: score (if graded)
 * - feedback: teacher comments (if graded)
 */
const studentSubmissions = [
  {
    id: 1,
    assignmentId: 4,
    studentName: "Emma Johnson",
    submittedDate: "Apr 3, 2025",
    status: "graded",
    grade: "A",
    feedback: "Excellent work! Your application is well-structured."
  },
  {
    id: 2,
    assignmentId: 4,
    studentName: "Michael Brown",
    submittedDate: "Apr 4, 2025",
    status: "graded",
    grade: "B+",
    feedback: "Good job, but could use more error handling."
  },
  {
    id: 3,
    assignmentId: 2,
    studentName: "Sophia Williams",
    submittedDate: "Apr 8, 2025",
    status: "submitted",
  },
  {
    id: 4,
    assignmentId: 1,
    studentName: "James Miller",
    submittedDate: "Apr 12, 2025",
    status: "submitted",
  },
];

/**
 * Assignments component - Main assignments page
 * 
 * Features:
 * - Tab system to switch between teacher and student views
 * - Teacher view: create, manage, and grade assignments
 * - Student view: view, submit, and track assignment status
 * - Modal dialogs for detailed views and submissions
 * - Status badges and type icons for visual differentiation
 * 
 * @returns {JSX.Element} The rendered Assignments component
 */
export default function Assignments() {
  // State management
  const [activeTab, setActiveTab] = useState("teacher"); // Track active tab (teacher/student)
  const [assignments, setAssignments] = useState(sampleAssignments); // Store assignments data
  const [submissions, setSubmissions] = useState(studentSubmissions); // Store submissions data
  const [selectedAssignment, setSelectedAssignment] = useState(null); // Track selected assignment for details view
  
  // Form state for creating new assignments
  const [newAssignmentTitle, setNewAssignmentTitle] = useState("");
  const [newAssignmentSubject, setNewAssignmentSubject] = useState("");
  const [newAssignmentDueDate, setNewAssignmentDueDate] = useState("");
  const [newAssignmentType, setNewAssignmentType] = useState("essay");
  const [newAssignmentDescription, setNewAssignmentDescription] = useState("");
  
  /**
   * Helper function to determine the appropriate badge for assignment status
   * @param {string} status - The current status of the assignment
   * @returns {JSX.Element} Appropriately styled badge
   */
  const getStatusBadge = (status) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-100 text-green-800">Open</Badge>;
      case "closed":
        return <Badge className="bg-gray-100 text-gray-800">Closed</Badge>;
      case "graded":
        return <Badge className="bg-blue-100 text-blue-800">Graded</Badge>;
      case "submitted":
        return <Badge className="bg-yellow-100 text-yellow-800">Submitted</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  
  /**
   * Helper function to get the appropriate icon for assignment type
   * @param {string} type - The type of assignment
   * @returns {JSX.Element} Appropriate icon component
   */
  const getTypeIcon = (type) => {
    switch (type) {
      case "essay":
        return <FileText className="h-5 w-5 text-blue-600" />;
      case "quiz":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case "report":
        return <FileText className="h-5 w-5 text-green-600" />;
      case "project":
        return <FileText className="h-5 w-5 text-purple-600" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };
  
  /**
   * Handler for creating a new assignment
   * Adds the new assignment to the state and resets the form
   */
  const handleCreateAssignment = () => {
    const newAssignment = {
      id: assignments.length + 1,
      title: newAssignmentTitle,
      subject: newAssignmentSubject,
      dueDate: newAssignmentDueDate,
      status: "open",
      type: newAssignmentType,
      description: newAssignmentDescription,
      submissions: 0,
      totalStudents: 30, // Default number of students
    };
    
    setAssignments([...assignments, newAssignment]);
    
    // Reset form fields after submission
    setNewAssignmentTitle("");
    setNewAssignmentSubject("");
    setNewAssignmentDueDate("");
    setNewAssignmentType("essay");
    setNewAssignmentDescription("");
  };
  
  /**
   * Handler for submitting an assignment (student view)
   * In a real app, this would handle file uploads and actual submission
   * @param {number} assignmentId - ID of the assignment being submitted
   */
  const handleSubmitAssignment = (assignmentId) => {
    // In a real app, this would handle file uploads and actual submission
    alert(`Assignment submitted successfully!`);
  };
  
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Page header with title and action button */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Assignments</h1>
          
          {/* Conditionally show Create Assignment button for teachers */}
          {activeTab === "teacher" && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-bedrock-primary hover:bg-bedrock-primary/90">
                  <Plus className="mr-2 h-4 w-4" /> Create Assignment
                </Button>
              </DialogTrigger>
              {/* Create assignment dialog form */}
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Create New Assignment</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {/* Form fields for creating a new assignment */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="title"
                      value={newAssignmentTitle}
                      onChange={(e) => setNewAssignmentTitle(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="subject" className="text-right">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={newAssignmentSubject}
                      onChange={(e) => setNewAssignmentSubject(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="dueDate" className="text-right">
                      Due Date
                    </Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={newAssignmentDueDate}
                      onChange={(e) => setNewAssignmentDueDate(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Type
                    </Label>
                    <select
                      id="type"
                      value={newAssignmentType}
                      onChange={(e) => setNewAssignmentType(e.target.value)}
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="essay">Essay</option>
                      <option value="quiz">Quiz</option>
                      <option value="report">Report</option>
                      <option value="project">Project</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <textarea
                      id="description"
                      value={newAssignmentDescription}
                      onChange={(e) => setNewAssignmentDescription(e.target.value)}
                      className="col-span-3 min-h-[100px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button type="submit" onClick={handleCreateAssignment}>Create</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
        
        {/* Main assignments card */}
        <Card>
          <CardHeader>
            <CardTitle>My Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Tabs to switch between teacher and student views */}
            <Tabs defaultValue="teacher" onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="teacher">Teacher View</TabsTrigger>
                <TabsTrigger value="student">Student View</TabsTrigger>
              </TabsList>
              
              {/* Teacher View Content */}
              <TabsContent value="teacher">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Map through assignments to display in table */}
                    {assignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(assignment.type)}
                            <span>{assignment.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>{assignment.subject}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{assignment.dueDate}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {assignment.submissions} / {assignment.totalStudents}
                        </TableCell>
                        <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                        <TableCell>
                          {/* Assignment details dialog */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[725px]">
                              <DialogHeader>
                                <DialogTitle>{assignment.title}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                {/* Assignment details */}
                                <div>
                                  <h3 className="text-sm font-medium text-gray-500">Subject</h3>
                                  <p>{assignment.subject}</p>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                                  <p>{assignment.dueDate}</p>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium text-gray-500">Description</h3>
                                  <p>{assignment.description}</p>
                                </div>
                                <Separator />
                                <h3 className="text-lg font-semibold">Submissions</h3>
                                {/* Submissions table would continue here */}
                                {/* ... keep existing code (the submissions table) */}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              {/* Student View Content */}
              <TabsContent value="student">
                <div className="space-y-4">
                  {assignments
                    .filter(assignment => assignment.status === "open")
                    .map((assignment) => (
                      <Card key={assignment.id}>
                        <CardContent className="pt-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                {getTypeIcon(assignment.type)}
                                <h3 className="text-lg font-medium">{assignment.title}</h3>
                                {getStatusBadge(assignment.status)}
                              </div>
                              <p className="text-sm text-gray-500">{assignment.subject}</p>
                              <div className="flex items-center text-sm text-gray-500 space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>Due: {assignment.dueDate}</span>
                              </div>
                              <p className="text-sm mt-2">{assignment.description}</p>
                            </div>
                            
                            <div className="flex flex-col space-y-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button className="bg-bedrock-primary hover:bg-bedrock-primary/90">
                                    <Upload className="mr-2 h-4 w-4" /> Submit
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Submit Assignment</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="file">Upload Files</Label>
                                      <Input
                                        id="file"
                                        type="file"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="comments">Comments (Optional)</Label>
                                      <textarea
                                        id="comments"
                                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        placeholder="Add any comments about your submission..."
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <DialogClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button
                                      onClick={() => handleSubmitAssignment(assignment.id)}
                                    >
                                      Submit Assignment
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
