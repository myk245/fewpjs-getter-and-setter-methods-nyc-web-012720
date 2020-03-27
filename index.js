class Circle {
   constructor(radius) {
      this.radius = radius
   }

   get diameter() {
      return this.radius * 2
   }

   // Math.PI gives us an accurate measurement for pi
   get circumference() {
      return Math.PI * (this.radius * 2)
   }

   get area() {
      return Math.PI * ((this.radius) ** 2)
   }

   // Define setter methods for diameter, circumference, and area which will accept values for each calculation,
   // calculate the radius based on the input value and set this.radius accordingly
   set diameter(diameter) {
      this.radius = diameter / 2
   }

   set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI)
   }

   set area(area) {
      this.radius = Math.sqrt(area / Math.PI)
   }
}