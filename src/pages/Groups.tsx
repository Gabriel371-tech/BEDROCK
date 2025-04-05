
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormDescription,
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Calendar, Clock, Edit, Lock, MoreHorizontal, Plus, Search, Shield, User, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Sample group data
const sampleGroups = [
  {
    id: 1,
    name: "Calculus Team",
    description: "A group for discussing advanced calculus problems and solutions",
    members: [
      { id: 1, name: "John Student", role: "Owner", avatar: null },
      { id: 2, name: "Emma Harris", role: "Member", avatar: null },
      { id: 3, name: "Lucas Wright", role: "Member", avatar: null },
    ],
    subject: "MATH301",
    schedule: "Tuesdays, 4:00 PM",
    location: "Library Study Room 3",
    isPublic: true,
    color: "blue",
    restrictedAccess: true
  },
  {
    id: 2,
    name: "Physics Lab Partners",
    description: "Collaboration for physics lab experiments and reports",
    members: [
      { id: 1, name: "John Student", role: "Member", avatar: null },
      { id: 4, name: "Olivia Chen", role: "Owner", avatar: null },
    ],
    subject: null,
    schedule: "Wednesdays, 3:00 PM",
    location: "Science Building Lab 2",
    isPublic: false,
    color: "red",
    restrictedAccess: false
  },
  {
    id: 3,
    name: "Literature Analysis Team",
    description: "Deep dive into literary classics and contemporary works",
    members: [
      { id: 1, name: "John Student", role: "Member", avatar: null },
      { id: 5, name: "Michael Smith", role: "Owner", avatar: null },
      { id: 6, name: "Sophia Garcia", role: "Member", avatar: null },
      { id: 7, name: "William Johnson", role: "Member", avatar: null },
    ],
    subject: "ENGL220",
    schedule: "Fridays, 5:00 PM",
    location: "Humanities Building Room 101",
    isPublic: true,
    color: "purple",
    restrictedAccess: false
  },
];

// Function to get color classes based on group color
const getColorClasses = (color: string) => {
  switch (color) {
    case "blue": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "red": return "bg-red-100 text-red-800 hover:bg-red-200";
    case "green": return "bg-green-100 text-green-800 hover:bg-green-200";
    case "purple": return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    case "amber": return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

// Form schema for creating a new group
const formSchema = z.object({
  name: z.string().min(3, {
    message: "Team name must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  subject: z.string().optional(),
  schedule: z.string().optional(),
  location: z.string().optional(),
  isPublic: z.boolean().default(true),
  restrictedAccess: z.boolean().default(true),
});

export default function Groups() {
  const [groups, setGroups] = useState(sampleGroups);
  const [activeView, setActiveView] = useState("grid");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      subject: undefined,
      schedule: "",
      location: "",
      isPublic: true,
      restrictedAccess: true,
    },
  });
  
  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to an API
    const newGroup = {
      id: groups.length + 1,
      name: values.name,
      description: values.description,
      members: [{ id: 1, name: "John Student", role: "Owner", avatar: null }],
      subject: values.subject || null,
      schedule: values.schedule || "Not scheduled",
      location: values.location || "No location set",
      isPublic: values.isPublic,
      color: ["blue", "red", "green", "purple", "amber"][Math.floor(Math.random() * 5)],
      restrictedAccess: values.restrictedAccess,
    };
    
    setGroups([...groups, newGroup]);
    setDialogOpen(false);
    form.reset();
    
    toast({
      title: "Team Created",
      description: `${values.name} has been created successfully.`,
    });
  }

  // Helper function to check if user is owner of a group
  const isOwner = (group: any) => {
    return group.members.some((m: any) => m.id === 1 && m.role === "Owner");
  };

  // Helper function to check if user can edit a group
  const canEdit = (group: any) => {
    return isOwner(group) || !group.restrictedAccess;
  };
  
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">Teams</h1>
          <div className="flex items-center gap-2">
            <div className="relative w-full max-w-[240px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search teams..." 
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Team
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Team</DialogTitle>
                  <DialogDescription>
                    Create a team to collaborate with other students on your courses.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter team name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input placeholder="Describe your team's purpose" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Related Subject (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="MATH301">MATH301 - Advanced Calculus</SelectItem>
                              <SelectItem value="HIST210">HIST210 - World History</SelectItem>
                              <SelectItem value="PHYS240">PHYS240 - Physics II</SelectItem>
                              <SelectItem value="COMP330">COMP330 - Database Systems</SelectItem>
                              <SelectItem value="ENGL220">ENGL220 - Literary Analysis</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            You can associate this team with a specific course
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="schedule"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Meeting Schedule (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Tuesdays 4PM" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Meeting Location (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Library Room 3" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="isPublic"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                              <FormLabel>Public Team</FormLabel>
                              <FormDescription>
                                Make this team visible to all students
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch 
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="restrictedAccess"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                              <FormLabel>Restricted Access</FormLabel>
                              <FormDescription>
                                Only you as the owner can modify team settings
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch 
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <DialogFooter className="mt-6">
                      <Button type="submit">Create Team</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            <Tabs defaultValue="grid" onValueChange={setActiveView} className="hidden sm:flex">
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <Tabs value={activeView} defaultValue="grid">
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group) => (
                <Card key={group.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {group.subject && (
                            <Badge className={getColorClasses(group.color)}>
                              {group.subject}
                            </Badge>
                          )}
                          {group.restrictedAccess && (
                            <Badge variant="outline" className="gap-1 border-amber-500 text-amber-700">
                              <Shield className="h-3 w-3" /> Restricted
                            </Badge>
                          )}
                        </div>
                        <CardTitle>{group.name}</CardTitle>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Messages</DropdownMenuItem>
                          {canEdit(group) ? (
                            <DropdownMenuItem>
                              <Edit className="h-3.5 w-3.5 mr-2" /> Edit Team
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem disabled className="text-gray-400 cursor-not-allowed">
                              <Lock className="h-3.5 w-3.5 mr-2" /> Edit Team (Restricted)
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="mt-1 line-clamp-2">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <span>{group.schedule}</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <span>{group.members.length} members</span>
                      </div>
                      <div className="flex items-start">
                        <User className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <span className="font-medium">
                          Owner: {group.members.find(m => m.role === "Owner")?.name}
                          {isOwner(group) && (
                            <span className="ml-2 text-green-600 text-xs">(You)</span>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-2">Members</p>
                      <div className="flex -space-x-2">
                        {group.members.slice(0, 3).map((member, i) => (
                          <Avatar key={i} className="border-2 border-white">
                            <AvatarFallback className="bg-bedrock-primary text-white">
                              {member.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {group.members.length > 3 && (
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 border-2 border-white text-xs font-medium">
                            +{group.members.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Team
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {filteredGroups.map((group) => (
                    <div key={group.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-2">
                            {group.subject && (
                              <Badge className={getColorClasses(group.color)}>
                                {group.subject}
                              </Badge>
                            )}
                            {group.restrictedAccess && (
                              <Badge variant="outline" className="gap-1 border-amber-500 text-amber-700">
                                <Shield className="h-3 w-3" /> Restricted
                              </Badge>
                            )}
                            <h3 className="ml-0 md:ml-2 text-lg font-medium">{group.name}</h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{group.description}</p>
                          <div className="mt-1 text-xs text-gray-500">
                            Owner: {group.members.find(m => m.role === "Owner")?.name}
                            {isOwner(group) && (
                              <span className="ml-2 text-green-600">(You)</span>
                            )}
                          </div>
                        </div>
                        <div className="mt-3 md:mt-0 flex items-center gap-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm">{group.members.length}</span>
                          </div>
                          <Badge variant="outline" className={group.isPublic ? "text-green-600" : "text-amber-600"}>
                            {group.isPublic ? "Public" : "Private"}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">View</Button>
                            {canEdit(group) ? (
                              <Button variant="outline" size="sm">
                                <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm" disabled className="text-gray-400 cursor-not-allowed">
                                <Lock className="h-3.5 w-3.5 mr-1" /> Restricted
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {filteredGroups.length === 0 && (
          <div className="text-center py-10">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No teams found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery ? `No teams match "${searchQuery}"` : "You haven't joined any teams yet"}
            </p>
            <div className="mt-6">
              <Button onClick={() => setDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create a Team
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
