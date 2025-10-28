import CardSection from "@/components/CardSection";

export default function CardTestPage() {
  const sampleCards = [
    {
      title: "Community Gardens",
      description: "We've helped establish 15 community gardens across Berkeley, providing fresh produce and green spaces for local residents.",
    },
    {
      title: "School Partnerships", 
      description: "Our volunteers work with 8 local schools to provide tutoring, mentorship, and educational support programs.",
    },
    {
      title: "Environmental Cleanup",
      description: "Monthly beach and park cleanups have removed over 2,000 pounds of waste from local recreational areas.",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">CardSection Test Page</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testing the CardSection component with sample data.
          </p>
        </div>
        
        <CardSection cards={sampleCards} />
      </div>
    </div>
  );
}