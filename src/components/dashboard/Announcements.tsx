
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample announcement data
const announcements = [
  {
    id: 1,
    title: "Fall Break Schedule",
    content: "Fall break will be from October 10-15. All classes will be suspended during this period.",
    date: "Sep 15, 2023",
    author: "Administration",
  },
  {
    id: 2,
    title: "Library Hours Extended",
    content: "The university library will extend its hours during midterm week. It will be open until midnight.",
    date: "Sep 18, 2023",
    author: "Library Services",
  },
];

export function Announcements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map(announcement => (
            <div key={announcement.id} className="border border-gray-200 rounded-lg p-4 card-hover">
              <h3 className="font-semibold">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {announcement.author} • {announcement.date}
              </p>
              <p className="mt-2 text-sm">{announcement.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
