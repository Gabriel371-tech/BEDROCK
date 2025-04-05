
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BellRing, Check, Edit, Globe, Keyboard, Lock, Mail, Shield, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Profile form schema
const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160, {
    message: "Bio must not be longer than 160 characters.",
  }).optional(),
  studentId: z.string().optional(),
  major: z.string().optional(),
});

// Notification preferences schema
const notificationFormSchema = z.object({
  emailNotifications: z.boolean().default(true),
  smsNotifications: z.boolean().default(false),
  pushNotifications: z.boolean().default(true),
  marketingEmails: z.boolean().default(false),
  newAssignment: z.boolean().default(true),
  gradePosted: z.boolean().default(true),
  courseAnnouncement: z.boolean().default(true),
  groupMessage: z.boolean().default(true),
  reminderNotice: z.boolean().default(false),
});

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  // Profile form
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "John Student",
      email: "john@university.edu",
      bio: "Third-year Computer Science student passionate about AI and machine learning.",
      studentId: "ST1234567",
      major: "Computer Science",
    },
  });
  
  // Notification form
  const notificationForm = useForm<z.infer<typeof notificationFormSchema>>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      marketingEmails: false,
      newAssignment: true,
      gradePosted: true,
      courseAnnouncement: true,
      groupMessage: true,
      reminderNotice: false,
    },
  });
  
  function onSaveProfile(values: z.infer<typeof profileFormSchema>) {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
    setIsEditing(false);
  }
  
  function onSaveNotifications(values: z.infer<typeof notificationFormSchema>) {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  }
  
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full justify-start mb-4 border-b bg-transparent p-0">
            <TabsTrigger
              value="profile"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-bedrock-primary px-4 pb-3 pt-2 data-[state=active]:shadow-none"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-bedrock-primary px-4 pb-3 pt-2 data-[state=active]:shadow-none"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="appearance"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-bedrock-primary px-4 pb-3 pt-2 data-[state=active]:shadow-none"
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-bedrock-primary px-4 pb-3 pt-2 data-[state=active]:shadow-none"
            >
              Security
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your profile information and personal details.
                    </CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center space-y-3">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl bg-bedrock-primary text-white">JS</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button variant="outline" size="sm">Change Photo</Button>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <Form {...profileForm}>
                      <form onSubmit={profileForm.handleSubmit(onSaveProfile)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={profileForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditing} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={profileForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditing} 
                                    type="email" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={profileForm.control}
                            name="studentId"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Student ID</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditing} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={profileForm.control}
                            name="major"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Major</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditing} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={profileForm.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bio</FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  disabled={!isEditing}
                                  placeholder="Tell us about yourself" 
                                  className="resize-none h-20"
                                />
                              </FormControl>
                              <FormDescription>
                                Brief description for your profile. Maximum 160 characters.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {isEditing && (
                          <div className="flex justify-end space-x-2">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </Button>
                            <Button type="submit">
                              Save Changes
                            </Button>
                          </div>
                        )}
                      </form>
                    </Form>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>
                  View your academic records and enrollment details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Program</h3>
                    <p className="mt-1">Bachelor of Science in Computer Science</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Year Level</h3>
                    <p className="mt-1">Junior (3rd Year)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Expected Graduation</h3>
                    <p className="mt-1">May 2025</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Academic Advisor</h3>
                    <p className="mt-1">Dr. Robert Johnson</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Configure how you want to receive notifications and what you want to be notified about.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...notificationForm}>
                  <form onSubmit={notificationForm.handleSubmit(onSaveNotifications)} className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Delivery Methods</h3>
                      <Separator />
                      
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <Label htmlFor="emailNotifications">Email Notifications</Label>
                          </div>
                          <FormField
                            control={notificationForm.control}
                            name="emailNotifications"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Switch
                                    id="emailNotifications"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <BellRing className="h-4 w-4 text-gray-500" />
                            <Label htmlFor="pushNotifications">Push Notifications</Label>
                          </div>
                          <FormField
                            control={notificationForm.control}
                            name="pushNotifications"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Switch
                                    id="pushNotifications"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <Label htmlFor="marketingEmails">Marketing Emails</Label>
                          </div>
                          <FormField
                            control={notificationForm.control}
                            name="marketingEmails"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Switch
                                    id="marketingEmails"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notification Types</h3>
                      <Separator />
                      
                      <div className="grid gap-4">
                        <FormField
                          control={notificationForm.control}
                          name="newAssignment"
                          render={({ field }) => (
                            <div className="flex items-center justify-between">
                              <Label htmlFor="newAssignment">New Assignment Posted</Label>
                              <FormControl>
                                <Switch
                                  id="newAssignment"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                          )}
                        />
                        
                        <FormField
                          control={notificationForm.control}
                          name="gradePosted"
                          render={({ field }) => (
                            <div className="flex items-center justify-between">
                              <Label htmlFor="gradePosted">Grade Posted</Label>
                              <FormControl>
                                <Switch
                                  id="gradePosted"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                          )}
                        />
                        
                        <FormField
                          control={notificationForm.control}
                          name="courseAnnouncement"
                          render={({ field }) => (
                            <div className="flex items-center justify-between">
                              <Label htmlFor="courseAnnouncement">Course Announcements</Label>
                              <FormControl>
                                <Switch
                                  id="courseAnnouncement"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                          )}
                        />
                        
                        <FormField
                          control={notificationForm.control}
                          name="groupMessage"
                          render={({ field }) => (
                            <div className="flex items-center justify-between">
                              <Label htmlFor="groupMessage">Group Messages</Label>
                              <FormControl>
                                <Switch
                                  id="groupMessage"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                          )}
                        />
                        
                        <FormField
                          control={notificationForm.control}
                          name="reminderNotice"
                          render={({ field }) => (
                            <div className="flex items-center justify-between">
                              <Label htmlFor="reminderNotice">Reminder Notices</Label>
                              <FormControl>
                                <Switch
                                  id="reminderNotice"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit">Save Notification Preferences</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>
                  Customize the look and feel of your student portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue="light">
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">
                      Choose between light, dark, or system preference for your interface.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="density">Interface Density</Label>
                    <Select defaultValue="comfortable">
                      <SelectTrigger id="density">
                        <SelectValue placeholder="Select density" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">
                      Adjust the density of the user interface.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Keyboard className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="keyboard-shortcuts">Enable Keyboard Shortcuts</Label>
                    <Switch id="keyboard-shortcuts" defaultChecked />
                  </div>
                  
                  <Button>Save Appearance Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and privacy settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h4 className="text-base font-medium">Change Password</h4>
                        <p className="text-sm text-gray-500">
                          Update your password regularly for better security.
                        </p>
                      </div>
                      <Button variant="outline">
                        <Lock className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h4 className="text-base font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-500">
                          Add an extra layer of security to your account.
                        </p>
                      </div>
                      <Button variant="outline">
                        <Shield className="mr-2 h-4 w-4" />
                        Enable 2FA
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="text-base font-medium">Privacy Settings</h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <Label htmlFor="profile-visibility">Profile Visibility</Label>
                        </div>
                        <Select defaultValue="students">
                          <SelectTrigger id="profile-visibility" className="w-40">
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="students">Students & Faculty</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-gray-500" />
                          <Label htmlFor="activity-status">Online Activity Status</Label>
                        </div>
                        <Switch id="activity-status" defaultChecked />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="text-base font-medium">Connected Accounts</h4>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <Check className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">University SSO</p>
                              <p className="text-xs text-gray-500">Connected on Sep 15, 2023</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
