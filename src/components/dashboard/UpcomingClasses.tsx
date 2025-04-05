
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample class data
const classes = [
  {
    id: 1,
    subject: "Advanced Calculus",
    time: "10:00 - 11:30 AM",
    location: "Room 302",
    professor: "Dr. Smith",
  },
  {
    id: 2,
    subject: "World History",
    time: "1:00 - 2:30 PM",
    location: "Room 145",
    professor: "Prof. Johnson",
  },
  {
    id: 3,
    subject: "Physics Lab",
    time: "3:00 - 5:00 PM",
    location: "Science Building",
    professor: "Dr. Feynman",
  },
];

export function UpcomingClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Today's Classes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classes.map(cls => (
            <div key={cls.id} className="bg-gray-50 rounded-lg p-4 card-hover">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{cls.subject}</h3>
                  <p className="text-sm text-gray-500">{cls.time}</p>
                </div>
                <div className="bg-bedrock-primary text-white text-xs font-medium px-2.5 py-1 rounded">
                  Upcoming
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                <p>{cls.location} • {cls.professor}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
