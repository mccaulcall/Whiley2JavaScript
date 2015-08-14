function g(int x) -> int:
    int y = x + 1
    return y

function f(int a):
    int b = g(a)
    assert b == a + 1