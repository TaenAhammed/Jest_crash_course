const functions = require("./functions");

// toBe -> Used to test primitive values
test("adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not toBe
test("adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("should be null", () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
    expect(functions.checkValue(NaN)).toBeFalsy();
});

// toEqual -> Used to test reference values
test("User should be Taen Ahammed object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Taen",
        lastName: "Ahammed"
    });
});

// Less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 700;

    expect(load1 + load2).toBeLessThan(1600);
});

// RegEx
test("There is no I in team", () => {
    expect("Team").not.toMatch(/i/i);
});

// Arrays
test("Admin should be in usernames", () => {
    const usernames = ["Taen", "Rakib", "Mahin", "Admin"];
    expect(usernames).toContain("Admin");
});
