export function ImpactStats() {
  const stats = [
    { value: "5,000+", label: "Meals Provided" },
    { value: "12", label: "Mosques Built" },
    { value: "150+", label: "Techies Empowered" },
    { value: "₦25M+", label: "Funds Distributed" },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
