# System Design - schema design and API design

# OOP Design - more client side design

Front-end
How do you design/scope out an application front to back? Consider:

- Mapping "real world objects" to programs
- How does the system work? What are the goals?
- What are the objects of the system?
- What are the relationships between/among objects?

Architect a system by separating the moving parts into logical components

## Encapsulation - bundle data and methods

- Information hiding - keep info hidden to prevent data tampering
  Ex: person obj may have phone number attribute; create method called getPhoneNumber to give "read access"

## Abstraction - result of encapsulation. Encapsulation is a method for abstraction.

- Hide everything but the relevant pieces/data about an obj
- Keeps things safe and simple
  Ex: User doesn't need to know how a coffee machine works, just that it will work

## Inheritance - derive classes from other classes to create hierarchy of classes to share a set of properties and methods

- Same base functions but with different features
  Ex: different coffee machines may do different specialized things, but ultimately all make coffee

## Object Composition Sidebar - combine objects to make larger, complex objects

- Functional components/compositions; you can chain many functions together
  Ex: putting together mutliple parts/buttons to make a more useful coffee maker

## Polymorphism - ability of an obj to take on may forms

Ex: chess piece can be a King, Queen, Bishop, Knight, Rook, Pawn, all of which have a different moveset

# Planning Object Oriented System

- Activity Diagrams - user stories in the form of a flow chart
  Ex: for a bus tracking app, you have users to consider, but also bus drivers, dispatchers
- Discuss different user stories, then activity diagrams
